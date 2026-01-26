---
type: method
interface: IChamferFeatureData2
member: IGetLoops
returns: Loop
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of loops
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChamferFeatureData2.ISetLoops
keywords:
  - igetloops
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - loops
  - count
  - int32
  - loop
---

# IChamferFeatureData2.IGetLoops

Gets the loops to which a chamfer is applied.

## Signature

```csharp
Loop IGetLoops( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of loops

## Return Value

in-process, unmanaged C++: Pointer to an array of loops of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IChamferFeatureData2::LoopCount
before calling this method.

## See Also

- `IChamferFeatureData2.ISetLoops`