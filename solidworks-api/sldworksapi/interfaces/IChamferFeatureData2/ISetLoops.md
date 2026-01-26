---
type: method
interface: IChamferFeatureData2
member: ISetLoops
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of loops
  -
    name: LoopList
    type: Loop
    description: in-process, unmanaged C++: Pointer to an array of loops of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IChamferFeatureData2.IGetLoops
  - IChamferFeatureData2.Loops
keywords:
  - isetloops
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - loops
  - count
  - int32
  - loop
  - list
  - void
---

# IChamferFeatureData2.ISetLoops

Sets the loops to which a chamfer is applied.

## Signature

```csharp
void ISetLoops( 
   System.Int32
Count
,
   ref Loop
LoopList
)
```
## Parameters

- `Count` (System.Int32): Number of loops
- `LoopList` (Loop): in-process, unmanaged C++: Pointer to an array of loops of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IChamferFeatureData2.IGetLoops`
- `IChamferFeatureData2.Loops`