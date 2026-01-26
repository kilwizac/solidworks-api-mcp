---
type: method
interface: ISimpleFilletFeatureData2
member: IGetLoops
returns: Loop2
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
  - ISimpleFilletFeatureData2.ISetLoops
  - ISimpleFilletFeatureData2.Loops
keywords:
  - igetloops
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - loops
  - count
  - int32
  - loop2
---

# ISimpleFilletFeatureData2.IGetLoops

Gets the loops on which to create a simple radius fillet.

## Signature

```csharp
Loop2 IGetLoops( 
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
ISimpleFilletFeatureData2::GetLoopCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.ISetLoops`
- `ISimpleFilletFeatureData2.Loops`