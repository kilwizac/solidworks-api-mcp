---
type: method
interface: ISldWorks
member: GetLatestSupportedFileVersion
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related: []
keywords:
  - version
  - number
  - solidworks
  - getlatestsupportedfileversion
  - isldworks
  - sld
  - works
  - latest
  - supported
  - file
  - int32
---

# ISldWorks.GetLatestSupportedFileVersion

Gets the version number that this instance of SOLIDWORKS reads and writes.

## Signature

```csharp
System.Int32 GetLatestSupportedFileVersion()
```
## Parameters

None.

## Return Value

File version number that this instance of SOLIDWORKS supports SOLIDWORKS Release Version Number SOLIDWORKS 95 44 SOLIDWORKS 96 243 SOLIDWORKS 97 483 SOLIDWORKS 97Plus 629 SOLIDWORKS 98 822 SOLIDWORKS 98Plus 1008 SOLIDWORKS 99 1137 SOLIDWORKS 2000 1500 SOLIDWORKS 2001 1750 SOLIDWORKS 2001Plus 1950 SOLIDWORKS 2003 2200 SOLIDWORKS 2004 2500 SOLIDWORKS 2005 2800 SOLIDWORKS 2006 3100 SOLIDWORKS 2007 3400 SOLIDWORKS 2008 3800 SOLIDWORKS 2009 4100 SOLIDWORKS 2010 4400 SOLIDWORKS 2011 4700 SOLIDWORKS 2012 5000 SOLIDWORKS 2013 6000 SOLIDWORKS 2014 7000 SOLIDWORKS 2015 8000 SOLIDWORKS 2016 9000 SOLIDWORKS 2017 10000 SOLIDWORKS 2018 11000 SOLIDWORKS 2019 12000 SOLIDWORKS 2020 13000 SOLIDWORKS 2021 14000 SOLIDWORKS 2022 15000 SOLIDWORKS 2023 16000 SOLIDWORKS 2024 17000 SOLIDWORKS 2025 18000 SOLIDWORKS 2026 19000

## Remarks

When opening a document whose version is less than the SOLIDWORKS latest supported file version, SOLIDWORKS converts the document to its latest supported file version.