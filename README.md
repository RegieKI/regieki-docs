## RegieKI Open Source

#### Introduction

Documentation for technical setup and toolkits created for production [RegieKI - Düsseldorf Schauspielhaus 2020/21](https://www.dhaus.de/programm/a-z/regie-k-i/).

**Terminology**

* *AI / Core* - machine learning and models
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
* *[hydritsi-core](https://github.com/autr/hydritsi-core)* - experimental fork of video-conferencing app [Jitsi](https://meet.jit.si)

#### System

* *collection* - training instructions received remotely by performers, recordings uploaded
* *training* - machine learning model is trained with cloud recordings
* *production* - performers interact with models, models effect on-stage audio visual

!!!include(../regieki-docs/sys.svg)!!!

#### Photos

* [fabrication](https://github.com/RegieKI/pdac/blob/main/media/fabrication)
* [stage](https://github.com/RegieKI/pdac/blob/main/media/stage)
* [misc](https://github.com/RegieKI/pdac/blob/main/media/misc)


#### Credits

Created by [Gilbert Sinnott](), [Helin Ulas](), [Meredith Thomas]() (tech trio™)

#### License

Code - [MIT](https://github.com/RegieKI/regieki-docs/blob/main/LICENSE-MIT.md) \
Media - [Creative Commons](https://github.com/RegieKI/regieki-docs/blob/main/LICENSE-CC.md)