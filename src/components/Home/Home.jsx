import React from 'react';
import './Home.css'; //
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { text } from '@fortawesome/fontawesome-svg-core';
import ImageSlider from '../../assets/ImageSlider';
import { Flex, SimpleGrid, Text, VStack, Box, Image, Button } from '@chakra-ui/react';



const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="Head">
                <div>
                    <marquee><strong>Welcome To BlueFly: </strong> Luxury Brand At Discounted Price</marquee>
                </div>
                <div> <ImageSlider /> </div>

            </div>





            <div>
                <h2 style={{ textAlign: 'center' }}>RECOMMENDED PRODUCTS</h2>
                <div className="grid-container">
                    <div class="product-item">
                        <img src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26941890/2024/4/5/d87e974e-6b77-42d0-8006-bf310c759f8d1712302492366HMRegularFitT-Shirt1.jpg' />

                        <VStack>

                            <Text as="b">Brown Stylish Tshirt</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>

                    <div class="product-item">
                        <img src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20400778/2023/1/24/0ef150b7-167b-4d44-8cfd-07627c319ad41674551823107-KAMA-AYURVEDA-10-Piece-New-Bestseller-Gift-Box-6491674551822-1.jpg' />


                        <VStack>

                            <Text as="b">Premium Makeup Kit</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>

                            </Flex>

                        </VStack>
                    </div>

                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/GG1030SK-30011827-003__70045__1_1800x1800.jpg?v=1716084949' />



                        <VStack>

                            <Text as="b">Gucci SunGlasses For Unisex</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>

                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/6030919092_RLLZ_1_1800x1800.jpg?v=1716225836' />


                        <VStack>

                            <Text as="b">KENDRA SCOTT LOVE BRACELET</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>

                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/OMIA189S-LEA004-4501__40001__1_1800x1800.jpg?v=1716153613' />



                        <VStack>

                            <Text as="b">WHITE MENS OUT OF OFFICE LOW-TOP SNEAKERS</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>

                </div>

                <div className='Showoff_section'>
                    <div className='showoff'>
                        <img src='https://www.bluefly.com/cdn/shop/files/Bluefly_Tile_Refresh_2_300x.png' alt='' />
                    </div>
                    <div className='showoff'>
                        <img src='https://www.bluefly.com/cdn/shop/files/Banner_2_300x.png' alt='Seond promot' />
                    </div>
                    <div className='showoff'>
                        <img src='https://www.bluefly.com/cdn/shop/files/WEB_ASSET_2_300x.jpg' alt='Third promot' />
                    </div>
                </div>

                <hr></hr>

                <div>
                    <h2 style={{ textAlign: 'center' }}>SHOP BY CATEGORY</h2>

                </div>

            </div>


            <div class="category-container">
                {/* <!-- First row --> */}
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/601550-SCA06-1000__00002__1_1800x1800.jpg?v=1709386624' />
                    <p>DRESSES</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/MA1635CC1G-MB0-000__00002__1_1800x1800.jpg?v=1709493142' />
                    <p>PUMPS & HEELS</p></div>
                {/* <!-- Second row --> */}
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/8073151__00002__1_1800x1800.jpg?v=1707694343' />
                    <p>HANDBAGS</p></div>
                <div className="category-item">
                    <img src='https://ampere.shop/cdn/shop/files/Dusk-Blackframewithdarktint_polarizedlenses_969c55e5-54b3-44bc-ad49-3c0eac2e49f5_1100x.jpg?v=1704269504' />
                    <p>SUNGLASSES</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/WW0S0CS4-FAR-KM5__70002__1_1800x1800.jpg?v=1709389541' />
                    <p>WOMEN'S SNEAKERS</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/products/2019843_1800x1800.jpg?v=1679939033' />
                    <p> MEN'S SNEAKERS</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/2134169_1800x1800.jpg?v=1703695623' />
                    <p>MEN'S T-SHIRTS</p></div>
                {/* <!-- Second row --> */}
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/1411377971_RLLZ_1_1800x1800.jpg?v=1708734586' />
                    <p>WOMEN'S TOPS</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/files/1411803738_RLLZ_1_1800x1800.jpg?v=1708392634' />
                    <p>WOMEN'S DENIM</p></div>
                <div className="category-item">
                    <img src='https://www.bluefly.com/cdn/shop/products/largeewb1489_1800x1800.jpg?v=1677079896' />
                    <p>JEWELERY</p></div>
            </div>



            <hr></hr>

            <div>
                <h1 style={{ textAlign: 'center' }}>NEW ARRIVALS</h1>
                <div className="grid-container">
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1111652482_RLLZ_3_1800x1800.jpg?v=1709447010' />

                        <VStack>

                            <Text as="b">VALENTINO ROCKSTUD SMALL GRAINY LEATHER</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>


                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1511748040_RLLZ_1_1800x1800.jpg?v=1709088242' />
                        <VStack>

                            <Text as="b">CHASER COLLARED SHIRT</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/4UjWEtZuXa2MJ7paHixZhyFEplxIaIo4-25_720x.jpg?v=1709328421' />

                        <VStack>

                            <Text as="b">PAM WOMENS ZIPPER RIBBED KNIT OVER-THE-KNEE BOOTS</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1111480077_RLLZ_1_1800x1800.jpg?v=1708104072' />

                        <VStack>

                            <Text as="b">PRE-OWNED DIOR NAVY TROTTER CANVAS</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>
                    </div>

                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/CT0151O-30003052-002__00287__1_96b8c668-7fcc-437a-bb4e-5ff980e71d29_1800x1800.jpg?v=1706256366' />

                        <VStack>

                            <Text as="b">CARTIER WOMENS CAT EYE SILVER SILVER TRANSPARENT FASHION DESIGNER EYEWEAR</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>

                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/products/largeewb1489_720x.jpg?v=1677079896' />

                        <VStack>

                            <Text as="b">UNIQUE HUGE 5.00CT ROUND REAL DIAMOND </Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>


                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1010833930_RLLZ_1_1800x1800.jpg?v=1708059863' />

                        <VStack>

                            <Text as="b">CHANEL WOMEN'S BLACK KNITTED TOP </Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>


                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1111740955_RLLZ_1_1800x1800.jpg?v=1709467639' />

                        <VStack>

                            <Text as="b">SAINT LAURENT LOU MINI QUILTED LEATHER CAMERA BAG</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>


                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1313825997_RLLZ_1_720x.jpg?v=1709351444' />

                        <VStack>

                            <Text as="b">WHITE MENS OUT OF OFFICE LOW-TOP SNEAKERS</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>
                    </div>
                    <div class="product-item">
                        <img src='https://www.bluefly.com/cdn/shop/files/1411654055_RLLZ_1_1800x1800.jpg?v=1709406893' />

                        <VStack>

                            <Text as="b">BURBERRY T-SHIRT</Text>
                            <Flex >
                                <Text as="del">$158</Text>
                                <Text as="b">$989.99</Text>
                                <Text as="kbd" color="red">Save 75%</Text>
                            </Flex>

                        </VStack>


                    </div>

                </div>
            </div>


            <div className='lower_section'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <hr></hr>



        </>
    )
}

export default Home;