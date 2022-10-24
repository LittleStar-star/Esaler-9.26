<template>
    <div class="order-area ptb-54">
        <div class="container">
            <div class="order-content pb-54">
                <img src="~/static/picture/check-mark.png" alt="ESALER">
                <h3>Thank you for your purchase</h3>
                <span>Your order number is: 001</span>
                <p>We'll email you an order confirmation with details and tracking info</p>
                <nuxt-link to="/products" class="default-btn">
                    Continue Shopping
                </nuxt-link>
            </div>
            <div class="item-order">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <ul class="order-item-content">
                            <li>
                                <h3>Item Order</h3>
                            </li>
                            <li>
                                Order number
                                <span>#001</span>
                            </li>
                            <li>
                                Created At
                                <span>01 August, 2021</span>
                            </li>
                            <li>
                                Total
                                <span>$564.00</span>
                            </li>
                            <li>
                                Payment Method
                                <span>Direct Bank Transfer</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <ul class="order-item-address">
                            <li class="addresss">
                                <h3>Billing Address</h3>
                                <span>Doreen McCool</span>
                            </li>
                            <li>
                                <span>Address:</span>
                                2491 Reel Avenue Albuquerque, NM 4542
                            </li>
                            <li>
                                <span>Phone:</span>
                                <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566,</a>
                                <a href="tel:+1-(514)-321-4567">(0755) 8271 7003</a>
                            </li>
                            <li>
                                <span>Email:</span>
                                123@456.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>