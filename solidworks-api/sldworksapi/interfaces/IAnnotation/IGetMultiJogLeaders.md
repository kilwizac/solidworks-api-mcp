---
type: method
interface: IAnnotation
member: IGetMultiJogLeaders
returns: MultiJogLeader
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of multi-jog leaders on this annotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetMultiJogLeaders
keywords:
  - arrows
  - multi
  - jog
  - leaders
  - annotations
  - iannotation
  - see
  - also
  - igetmultijogleaders
  - annotation
  - count
  - int32
  - leader
---

# IAnnotation.IGetMultiJogLeaders

Gets the multi-jog leaders on this annotation.

## Signature

```csharp
MultiJogLeader IGetMultiJogLeaders( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of multi-jog leaders on this annotation

## Return Value

in-process, unmanaged C++: Pointer to an array of the multi-jog leaders VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IAnnotation::GetMultiJogLeaderCount
to get Count.

## See Also

- `IAnnotation.GetMultiJogLeaders`