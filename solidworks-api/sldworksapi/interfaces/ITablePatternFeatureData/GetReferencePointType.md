---
type: method
interface: ITablePatternFeatureData
member: GetReferencePointType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.ReferencePoint
keywords:
  - getreferencepointtype
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - reference
  - point
  - type
  - int32
  - driven
  - properties
  - vba
---

# ITablePatternFeatureData.GetReferencePointType

Gets whether the table-driven pattern's reference point is a closed curve, a sketch point, or a vertex.

## Signature

```csharp
System.Int32 GetReferencePointType()
```
## Parameters

None.

## Return Value

Type of reference point: 0 = closed curve 1 = sketch point 2 = vertex

## Examples

- Get Table-driven Pattern Properties (VBA) (Get_Table-driven_Pattern_Properties_Example_VB.htm)

## See Also

- `ITablePatternFeatureData.ReferencePoint`