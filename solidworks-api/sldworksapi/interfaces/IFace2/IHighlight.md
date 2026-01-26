---
type: method
interface: IFace2
member: IHighlight
returns: void
parameters:
  -
    name: State
    type: System.Boolean
    description: True adds highlighting, false removes highlighting
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.Highlight
  - IFace2.Highlight
keywords:
  - highlight
  - faces
  - ihighlight
  - iface2
  - face2
  - state
  - boolean
  - void
---

# IFace2.IHighlight

Adds highlighting to or removes highlighting from a face.

## Signature

```csharp
void IHighlight( 
   System.Boolean
State
)
```
## Parameters

- `State` (System.Boolean): True adds highlighting, false removes highlighting

## Return Value

Unknown.

## Remarks

Highlighting remains in effect until the model is rebuilt or redrawn.
This method is not supported for faces obtained from reference surface bodies.

## See Also

- `IEdge.Highlight`
- `IFace2.Highlight`