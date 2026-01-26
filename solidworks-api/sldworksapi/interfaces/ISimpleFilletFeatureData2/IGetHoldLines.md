---
type: method
interface: ISimpleFilletFeatureData2
member: IGetHoldLines
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of hold lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.CurvatureContinuous
  - ISimpleFilletFeatureData2.HelpPoint
  - ISimpleFilletFeatureData2.HoldLines
  - ISimpleFilletFeatureData2.ISetHoldLines
keywords:
  - fillets
  - face
  - blend
  - fillet
  - igetholdlines
  - isimplefilletfeaturedata2
  - simple
  - feature
  - data2
  - hold
  - lines
  - count
  - int32
  - object
---

# ISimpleFilletFeatureData2.IGetHoldLines

Gets the hold lines (boundaries) for a face blend fillet feature.

## Signature

```csharp
System.Object IGetHoldLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of hold lines

## Return Value

in-process, unmanaged C++: Pointer to an array of hold lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISimpleFilletFeatureData2::GetHoldLineCount
before using this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.
This method corresponds to the
Hold lines
selection box available when creating face-blend fillets. See the SOLIDWORKS Help for more information about face-blend fillets and hold lines.

## See Also

- `ISimpleFilletFeatureData2.CurvatureContinuous`
- `ISimpleFilletFeatureData2.HelpPoint`
- `ISimpleFilletFeatureData2.HoldLines`
- `ISimpleFilletFeatureData2.ISetHoldLines`