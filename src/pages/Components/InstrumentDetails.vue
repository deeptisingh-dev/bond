<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h3 class="card-title text-left">Instrument / Security Details</h3>
          </template>
          <li class="search-bar input-group" >
              <input
              v-model="model.ISIN"
              type="text"
              color="black"
              id="inlineFormInputGroup"
              placeholder="ISIN"
            />
            <button @click.prevent="getPrice"
              class="btn btn-link"
              id="search-button"
              data-toggle="modal"
              data-target="#searchModal"
            >
              <i class="tim-icons icon-zoom-split"></i>
            </button>
          </li>

          <card class="text-left">
          <h4 slot="header" class="card-title">Pricing Data for ISIN</h4>
          <form class="form-horizontal" action="#" method="#" @submit.prevent>
            <div class="row">
              <label class="col-md-3 col-form-label">ISIN</label>
              <div class="col-md-9">
                <base-input v-model="model.ISIN" placeholder="ISIN"> </base-input>
              </div>
            </div>
            <div class="row">
              <label class="col-md-3 col-form-label">Descriptor</label>
              <div class="col-md-9">
                <base-input v-model="model.Descriptor" placeholder="Descriptor"> </base-input>
              </div>
            </div>
             <div class="row">
              <label class="col-md-3 col-form-label">Weighted_avg_price</label>
              <div class="col-md-9">
                <base-input v-model="model.Weighted_avg_price" placeholder="Weighted_avg_price"> </base-input>
              </div>
            </div>
             <div class="row">
              <label class="col-md-3 col-form-label">Last_trade_price</label>
              <div class="col-md-9">
                <base-input v-model="model.Last_trade_price" placeholder="Last_trade_price"> </base-input>
              </div>
            </div>
            <div class="row">
              <label class="col-md-3 col-form-label">YTM</label>
              <div class="col-md-9">
                <base-input v-model="model.YTM" placeholder="YTM"> </base-input>
              </div>
            </div>
            <div class="row">
              <label class="col-md-3 col-form-label">Last_trade_yield</label>
              <div class="col-md-9">
                <base-input v-model="model.Last_trade_yield" placeholder="Last_trade_yield"> </base-input>
              </div>
            </div>
            <div class="row">
              <label class="col-md-3 col-form-label">Value_lakhs</label>
              <div class="col-md-9">
                <base-input v-model="model.Value_lakhs" placeholder="Value_lakhs"> </base-input>
              </div>
            </div>
            <div class="row">
              <label class="col-md-3 col-form-label">Trade_count</label>
              <div class="col-md-9">
                <base-input v-model="model.Trade_count" placeholder="Trade_count"> </base-input>
              </div>
            </div>
            </form>
        </card>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import {
  TabPane,
  Tabs,
  Card,
  Collapse,
  CollapseItem,
  BaseInput 
} from "@/components/index";

export default {
  components: {
    TabPane,
    Tabs,
    Card,
    Collapse,
    CollapseItem,
    BaseInput
  },
  data() {
    return {
      model: {
        ISIN: "",
        Descriptor:"",
        Weighted_avg_price:"",
        Last_trade_price:"",
        YTM:"",
        Last_trade_yield:"",
        Value_lakhs:"",
        Trade_count:""
      }
    };
  },
  methods:{
      getPrice:function(){
        var url = 'https://b6skvn9l7h.execute-api.ap-south-1.amazonaws.com/Dev/getpriceforisin';
        const vm = this;
        axios.post(url,{
            ISIN:vm.model['ISIN']
        })
        .then(function (res) {
                vm.model['ISIN']=res.data[2].ISIN
                vm.model['Descriptor']=res.data[2].Descriptor
                vm.model['Weighted_avg_price']=res.data[2].Weighted_avg_price
                vm.model['Last_trade_price']=res.data[2].Last_trade_price
                vm.model['YTM']=res.data[2].YTM
                vm.model['Last_trade_yield']=res.data[2].Last_trade_yield
                vm.model['Value_lakhs']=res.data[2].Value_lakhs
                vm.model['Trade_count']=res.data[2].Trade_count 
        });
    }
  }
};
</script>
<style></style>
