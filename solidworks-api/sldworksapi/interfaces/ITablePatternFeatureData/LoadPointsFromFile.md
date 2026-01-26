---
type: method
interface: ITablePatternFeatureData
member: LoadPointsFromFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file with the table-driven pattern feature's point locations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - ITablePatternFeatureData.SavePointsToFile
keywords:
  - loadpointsfromfile
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - load
  - points
  - file
  - name
  - string
  - boolean
---

# ITablePatternFeatureData.LoadPointsFromFile

Loads the location points of the table-driven pattern from a *.sldptab file.

## Signature

```csharp
System.Boolean LoadPointsFromFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the file with the table-driven pattern feature's point locations

## Return Value

True if the file loads successfully, false if not

## See Also

- `ITablePatternFeatureData.SavePointsToFile`