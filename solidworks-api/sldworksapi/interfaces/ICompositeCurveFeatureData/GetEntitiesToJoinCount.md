---
type: method
interface: ICompositeCurveFeatureData
member: GetEntitiesToJoinCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICompositeCurveFeatureData.GetEntitiesToJoin
keywords:
  - getentitiestojoincount
  - icompositecurvefeaturedata
  - composite
  - curve
  - feature
  - data
  - entities
  - join
  - count
  - int32
  - insert
  - vb
  - net
  - vba
---

# ICompositeCurveFeatureData.GetEntitiesToJoinCount

Gets the number of entities that are joined to create a composite curve.

## Signature

```csharp
System.Int32 GetEntitiesToJoinCount()
```
## Parameters

None.

## Return Value

Number of entities

## Remarks

Call this method before calling
ICompositeCurveFeatureData::IGetEntitiesToJoin
.

## Examples

- Insert a Composite Curve (C#) (Insert_a_Composite_Curve_Example_CSharp.htm)
- Insert a Composite Curve (VB.NET) (Insert_a_Composite_Curve_Example_VBNET.htm)
- Insert a Composite Curve (VBA) (Insert_a_Composite_Curve_Example_VB.htm)

## See Also

- `ICompositeCurveFeatureData.GetEntitiesToJoin`