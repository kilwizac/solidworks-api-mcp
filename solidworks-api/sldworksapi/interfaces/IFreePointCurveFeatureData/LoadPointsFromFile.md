---
type: method
interface: IFreePointCurveFeatureData
member: LoadPointsFromFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name of the free-point curve file that contains the points to load; you can specify .sldcrv files or .txt files that use the same format as .sldcrv files
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - loadpointsfromfile
  - ifreepointcurvefeaturedata
  - free
  - point
  - curve
  - feature
  - data
  - load
  - points
  - file
  - name
  - string
  - boolean
---

# IFreePointCurveFeatureData.LoadPointsFromFile

Loads the points for this free-point curve from a file.

## Signature

```csharp
System.Boolean LoadPointsFromFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name of the free-point curve file that contains the points to load; you can specify .sldcrv files or .txt files that use the same format as .sldcrv files

## Return Value

True if the points loaded successfully, false if not

## Remarks

See SOLIDWORKS Help for details about free-point curve files.