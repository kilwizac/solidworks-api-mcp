---
type: method
interface: ISketchBlockInstance
member: GetScale3
returns: System.Double
parameters:
  -
    name: Ignoreparentscale
    type: System.Boolean
    description: True to ignore the parent scale, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - getscale3
  - isketchblockinstance
  - sketch
  - block
  - instance
  - scale3
  - ignoreparentscale
  - boolean
  - double
---

# ISketchBlockInstance.GetScale3

Gets the scale for this block instance.

## Signature

```csharp
System.Double GetScale3( 
   System.Boolean
Ignoreparentscale
)
```
## Parameters

- `Ignoreparentscale` (System.Boolean): True to ignore the parent scale, false to not

## Return Value

Scale: 0.0000001 to 500000

## Remarks

Use
ISketchBlockInstance::Scale2
to set the scale.