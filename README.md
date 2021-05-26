## RegieKI Open Source

#### Introduction

Documentation for technical setup and toolkits created for production [RegieKI - Düsseldorf Schauspielhaus 2020/21](https://www.dhaus.de/programm/a-z/regie-k-i/).

**Terminology**

* *Core* - machine learning and models
* *AV* - audio visual material and patches
* *PDAC* - data recording and communication device

**Repositories**

* *[regieki-docs](https://github.com/regieki/regieki-docs)* - documentation 
* *[pdac-specification](https://github.com/regieki/pdac-specification)* - physical design specification for PDAC devices
* *[pdac-frontend](https://github.com/regieki/pdac-frontend)* - webapp user-interface for PDAC devices (development)
* *[pdac-backend](https://github.com/regieki/pdac-backend)* - Python backend for PDAC devices (development)
* *[pdac](https://github.com/regieki/pdac)* - combined frontend / backend application (production)
* *[regieki-core](https://github.com/regieki/regieki-core)* - repository for managing datasets, training and running ML models
* *[regieki-av](https://github.com/regieki/regieki-av)* - touch designer patches
* *[regieki-controller](https://github.com/regieki/regieki-controller)* - remote testing application for stage PDACs

#### System

* *collection* - training instructions are received remotely by performers, recorded video is uploaded to cloud
* *training* - machine learning models are trained with cloud data
* *stage* - performers interact with models, models controls on-stage audio visual

------------SVG IMAGE------------

#### Photos

* [fabrication]()
* [stage]()
* [misc]()


#### Credits

Created by [Helin Ulas](), [Meredith Thomas](), [Gilbert Sinnott]()

#### License

MIT / Creative Commons


[![DHAUS](../docs/dhaus.svg)](https://www.dhaus.de)