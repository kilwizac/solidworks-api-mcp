---
type: method
interface: ISimpleFilletFeatureData2
member: ISetLoops
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of loops
  -
    name: LoopList
    type: Loop2
    description: in-process, unmanaged C++: Pointer to an array of loops of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.GetLoopCount
  - ISimpleFilletFeatureData2.IGetLoops
  - ISimpleFilletFeatureData2.Loops
keywords:
  - isetloops
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - loops
  - count
  - int32
  - loop
  - list
  - loop2
  - void
---

# ISimpleFilletFeatureData2.ISetLoops

Sets the loops on which to put a simple radius fillet.

## Signature

```csharp
void ISetLoops( 
   System.Int32
Count
,
   ref Loop2
LoopList
)
```
## Parameters

- `Count` (System.Int32): Number of loops
- `LoopList` (Loop2): in-process, unmanaged C++: Pointer to an array of loops of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.GetLoopCount`
- `ISimpleFilletFeatureData2.IGetLoops`
- `ISimpleFilletFeatureData2.Loops`