---
type: method
interface: ISimpleFilletFeatureData2
member: GetLoopCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.ISetLoops
  - ISimpleFilletFeatureData2.Loops
keywords:
  - getloopcount
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - loop
  - count
  - int32
---

# ISimpleFilletFeatureData2.GetLoopCount

Gets the number of loops on which to create a single radius fillet.

## Signature

```csharp
System.Int32 GetLoopCount()
```
## Parameters

None.

## Return Value

Number of loops

## Remarks

Call this method before calling
ISimpleFilletFeatureData2::IGetLoops
to get the size of the array for that method.

## See Also

- `ISimpleFilletFeatureData2.ISetLoops`
- `ISimpleFilletFeatureData2.Loops`