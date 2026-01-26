---
type: method
interface: IBody2
member: GetGraphicsBody
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getgraphicsbody
  - ibody2
  - body2
  - graphics
  - body
  - object
  - ifacet
---

# IBody2.GetGraphicsBody

Gets the graphics body associated with this body.

## Signature

```csharp
System.Object GetGraphicsBody()
```
## Parameters

None.

## Return Value

IGraphicsBody

## Remarks

This method is valid only if
IBody2::IsGraphicsBody
is true.

## Examples

- IFacet (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFacet)