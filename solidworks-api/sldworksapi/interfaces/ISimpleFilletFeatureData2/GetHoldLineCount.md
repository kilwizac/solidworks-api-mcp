---
type: method
interface: ISimpleFilletFeatureData2
member: GetHoldLineCount
returns: System.Int32
parameters: []
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
  - getholdlinecount
  - isimplefilletfeaturedata2
  - simple
  - feature
  - data2
  - hold
  - line
  - count
  - int32
---

# ISimpleFilletFeatureData2.GetHoldLineCount

Gets the number of hold lines (boundaries) for a face blend fillet feature.

## Signature

```csharp
System.Int32 GetHoldLineCount()
```
## Parameters

None.

## Return Value

Number of hold lines

## Remarks

Call this method before calling
ISimpleFilletFeatureData::IGetHoldLines
to get the size of the array for that method.
This method corresponds to the
Hold lines
selection box available when creating face-blend fillets. See the SOLIDWORKS Help for more information about face-blend fillets and hold lines.

## See Also

- `ISimpleFilletFeatureData2.CurvatureContinuous`
- `ISimpleFilletFeatureData2.HelpPoint`
- `ISimpleFilletFeatureData2.HoldLines`
- `ISimpleFilletFeatureData2.ISetHoldLines`