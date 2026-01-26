---
type: method
interface: ISketch
member: SetDetachSegmentOnDrag
returns: System.Boolean
parameters:
  -
    name: Detach
    type: System.Boolean
    description: True to select Detach Segment on Drag , false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.GetDetachSegmentOnDrag
keywords:
  - detach
  - segment
  - drag
  - sketch
  - see
  - also
  - isketch
  - segments
  - setdetachsegmentondrag
  - boolean
---

# ISketch.SetDetachSegmentOnDrag

Sets the Detach Segment on Drag setting.

## Signature

```csharp
System.Boolean SetDetachSegmentOnDrag( 
   System.Boolean
Detach
)
```
## Parameters

- `Detach` (System.Boolean): True to select Detach Segment on Drag , false to not

## Return Value

True if Detach Segment on Drag is set, false if not

## Remarks

Although this setting can be returned or set at any time, SOLIDWORKS sets it to false upon exiting or entering a sketch. Thus, this method is only useful if called while a sketch is active.

## See Also

- `ISketch.GetDetachSegmentOnDrag`