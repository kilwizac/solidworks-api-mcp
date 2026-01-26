---
type: property
interface: IChamferFeatureData2
member: LoopCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChamferFeatureData2.ISetLoops
  - IChamferFeatureData2.Loops
keywords:
  - loopcount
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - loop
  - count
  - int32
readonly: true
---

# IChamferFeatureData2.LoopCount

Gets the number of loops to which a chamfer is applied.

## Signature

```csharp
System.Int32 LoopCount {get;}
```
## Parameters

None.

## Return Value

Number of loops

## Remarks

Call this property before calling
IChamferFeatureData2::IGetLoops
.

## See Also

- `IChamferFeatureData2.ISetLoops`
- `IChamferFeatureData2.Loops`