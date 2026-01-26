---
type: property
interface: ISketchBlockInstance
member: Scale2
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - scale
  - iscalefeaturedata
  - scale2
  - sketch
  - block
  - instance
  - double
readonly: null
---

# ISketchBlockInstance.Scale2

Sets the scale for this block instance.

## Signature

```csharp
System.Double Scale2 {get; set;}
```
## Parameters

None.

## Return Value

Scale: 0.0000001 to 500000 (see Remarks )

## Remarks

The getter of this property is obsolete. It has been superseded by
ISketchBlockInstance::GetScale3
.