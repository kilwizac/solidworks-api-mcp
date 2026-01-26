---
type: method
interface: ITablePatternFeatureData
member: SavePointsToFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file to which to save the points
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - ITablePatternFeatureData.LoadPointsFromFile
keywords:
  - savepointstofile
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - save
  - points
  - file
  - name
  - string
  - boolean
---

# ITablePatternFeatureData.SavePointsToFile

Saves the location of the table-driven pattern feature's points to a *.sldptab file.

## Signature

```csharp
System.Boolean SavePointsToFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the file to which to save the points

## Return Value

True if successful, false if not

## Remarks

Exported units, e.g. meters, of the document that owns the feature, and not necessarily those of the active document, are used when data is saved to a file.

## See Also

- `ITablePatternFeatureData.LoadPointsFromFile`