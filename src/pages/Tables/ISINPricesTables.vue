<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card bodyClasses="table-full-width">
          <h4 slot="header" class="card-title text-left">PRICES</h4>
          <el-table :data="tableData">
            <el-table-column
              min-width="150"
              sortable
              label="ISIN"
              property="ISIN"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              label="Descriptor"
              property="Descriptor"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              label="Weighted_avg_price"
              property="Weighted_avg_price"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              align="right"
              header-align="right"
              label="Last_trade_price"
              property="Last_trade_price"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              align="right"
              header-align="right"
              label="YTM"
              property="YTM"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              align="right"
              header-align="right"
              label="Last_trade_yield"
              property="Last_trade_yield"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              align="right"
              header-align="right"
              label="Value_lakhs"
              property="Value_lakhs"
            ></el-table-column>
            <el-table-column
              min-width="150"
              sortable
              align="right"
              header-align="right"
              label="Trade_count"
              property="Trade_count"
            ></el-table-column>
          </el-table>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Card } from "@/components/index";
import { Table, TableColumn } from "element-ui";

export default {
  components: {
    Card,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return { 
      tableData: []
    };
  },
  mounted: function(){
    this.getISINPrices()
  },
  methods: {
    getISINPrices: function(){
        var url = 'https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/getprices4allisin';
        const vm = this;
        axios.get(url)
        .then(function (res) {
            if(res.data[0].row>=1){
                vm.tableData=res.data.slice(2)
            }
        });
    }
  }
  
};
</script>
<style></style>
