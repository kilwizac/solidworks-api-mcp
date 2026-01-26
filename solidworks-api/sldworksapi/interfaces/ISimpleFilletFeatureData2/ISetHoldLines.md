---
type: method
interface: ISimpleFilletFeatureData2
member: ISetHoldLines
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of hold lines
  -
    name: PList
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of hold lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.CurvatureContinuous
  - ISimpleFilletFeatureData2.GetHoldLineCount
  - ISimpleFilletFeatureData2.HelpPoint
  - ISimpleFilletFeatureData2.HoldLines
  - ISimpleFilletFeatureData2.IGetHoldLines
keywords:
  - fillets
  - face
  - blend
  - fillet
  - isetholdlines
  - isimplefilletfeaturedata2
  - simple
  - feature
  - data2
  - hold
  - lines
  - count
  - int32
  - list
  - object
  - void
---

# ISimpleFilletFeatureData2.ISetHoldLines

Sets the hold lines (boundaries) for this face blend fillet feature.

## Signature

```csharp
void ISetHoldLines( 
   System.Int32
Count
,
   ref System.Object
PList
)
```
## Parameters

- `Count` (System.Int32): Number of hold lines
- `PList` (System.Object): in-process, unmanaged C++: Pointer to an array of hold lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

This method corresponds to the
Hold lines
selection box available when creating face-blend fillets. See the SOLIDWORKS Help for more information about face-blend fillets and hold lines.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.CurvatureContinuous`
- `ISimpleFilletFeatureData2.GetHoldLineCount`
- `ISimpleFilletFeatureData2.HelpPoint`
- `ISimpleFilletFeatureData2.HoldLines`
- `ISimpleFilletFeatureData2.IGetHoldLines`