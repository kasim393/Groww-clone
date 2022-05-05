import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./product.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Product = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="product_section web-align">
      <div class="product_chip">
        <span class="">OUR PRODUCTS</span>
      </div>
      <h2 class="product_heading">Your workload. Your choice.</h2>
      <div className="tab-container">
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ borderBottom: "#00d09c" }}
                label={`AI`}
                {...a11yProps(0)}
                id="AI"
              />
              <Tab label="Render" {...a11yProps(1)} />
              <Tab label="Transcode" {...a11yProps(2)} />
              <Tab label="Live" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="valign-wrapper">
              <div>
                <img
                  class="ProductImg "
                  src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/stocksImg.37ac1f11.png"
                  alt="stocks"
                />
              </div>
              <div className="tab-right">
                <div>
                  <div class="MainText">
                    Zero<span class="MainPara">interruption</span>
                  </div>
                  <div class="Para">
                    Scale training of your neural net. Easily upload your
                    dataset or run a graphical game + setup a RL environment. No
                    spot interruption.
                  </div>
                  <button className="product-btn">Explore AI</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div class="valign-wrapper">
              <img
                class="ProductImg "
                src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/mfImg.db19e475.png"
                alt="stocks"
              />
              <div className="tab-right">
                <div>
                  <div class="MainText">
                    0%<span class="MainPara">lost time</span>
                  </div>
                  <div class="Para">
                    Cluster render your Blender, Maya and other work loads.
                    Parallelize up to 1000 GPUs.
                  </div>
                  <button className="product-btn">Explore Rendering</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div class="valign-wrapper">
              <img
                class="ProductImg "
                src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/usStocksImg.1a3568c2.png"
                alt="stocks"
              />
              <div className="tab-right">
                <div>
                  <div class="MainText">
                    Free<span class="MainPara">up to 1080p</span>
                  </div>
                  <div class="Para">
                    Transcode your content into HLS and other formats.
                  </div>
                  <button className="product-btn">Explore Transcode</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div class="valign-wrapper">
              <img
                class="ProductImg "
                src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/fdImg.b51bb09b.png"
                alt="stocks"
              />
              <div className="tab-right">
                <div>
                  <div class="MainText">
                    100%<span class="MainPara">uptime</span>
                  </div>
                  <div class="Para">
                    Offload your live streams to our edge and transcode + serve
                    media directly.
                  </div>
                  <button className="product-btn">
                    Explore Live Streaming
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      <div className="view-product">
        <span>View all product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="22"
          width="22"
          class="pos-rel vm44Arrow"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Product;
