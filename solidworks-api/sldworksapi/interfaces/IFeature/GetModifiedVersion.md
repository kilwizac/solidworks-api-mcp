---
type: method
interface: IFeature
member: GetModifiedVersion
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetCreatedVersion
  - IModelDoc2.IVersionHistory
  - IModelDoc2.VersionHistory
  - ISldWorks.IVersionHistory
  - ISldWorks.VersionHistory
keywords:
  - version
  - number
  - solidworks
  - getmodifiedversion
  - ifeature
  - feature
  - modified
  - int32
---

# IFeature.GetModifiedVersion

Gets the SOLIDWORKS version number in which this feature was last modified.

## Signature

```csharp
System.Int32 GetModifiedVersion()
```
## Parameters

None.

## Return Value

SOLIDWORKS version number in which this feature was last modified (see Remarks )

## Remarks

SOLIDWORKS Release
Version Number
SOLIDWORKS 95
44
SOLIDWORKS 96
243
SOLIDWORKS 97
483
SOLIDWORKS 97Plus
629
SOLIDWORKS 98
822
SOLIDWORKS 98Plus
1008
SOLIDWORKS 99
1137
SOLIDWORKS 2000
1500
SOLIDWORKS 2001
1750
SOLIDWORKS 2001Plus
1950
SOLIDWORKS 2003
2200
SOLIDWORKS 2004
2500
SOLIDWORKS 2005
2800
SOLIDWORKS 2006
3100
SOLIDWORKS 2007
3400
SOLIDWORKS 2008
3800
SOLIDWORKS 2009
4100
SOLIDWORKS 2010
4400
SOLIDWORKS 2011
4700
SOLIDWORKS 2012
5000
SOLIDWORKS 2013
6000
SOLIDWORKS 2014
7000
SOLIDWORKS 2015
8000
SOLIDWORKS 2016
9000
SOLIDWORKS 2017
10000
SOLIDWORKS 2018
11000
SOLIDWORKS 2019
12000
SOLIDWORKS 2020
13000
SOLIDWORKS 2021
14000
SOLIDWORKS 2022
15000
SOLIDWORKS 2023
16000
SOLIDWORKS 2024
17000
SOLIDWORKS 2025
18000
SOLIDWORKS 2026
19000
To get the SOLIDWORKS version number in which the feature was created, use
IFeature::GetCreatedVersion
.

## See Also

- `IFeature.GetCreatedVersion`
- `IModelDoc2.IVersionHistory`
- `IModelDoc2.VersionHistory`
- `ISldWorks.IVersionHistory`
- `ISldWorks.VersionHistory`