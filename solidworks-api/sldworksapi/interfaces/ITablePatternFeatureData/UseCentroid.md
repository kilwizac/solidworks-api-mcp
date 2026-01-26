---
type: property
interface: ITablePatternFeatureData
member: UseCentroid
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - centroid
  - usecentroid
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - use
  - boolean
readonly: null
---

# ITablePatternFeatureData.UseCentroid

Gets or sets whether to set the reference point to the centroid of the seed feature for this table-driven pattern feature.

## Signature

```csharp
System.Boolean UseCentroid {get; set;}
```
## Parameters

None.

## Return Value

True to use the seed feature's centroid as the reference point, false to not

## Remarks

If this property is set to false, then you must specify
ITablePatternFeatureData::ReferencePoint
.

## Examples

- ITablePatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITablePatternFeatureData)