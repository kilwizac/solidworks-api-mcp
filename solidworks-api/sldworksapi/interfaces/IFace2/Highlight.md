---
type: method
interface: IFace2
member: Highlight
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
  - IFace2.IHighlight
keywords:
  - highlight
  - faces
  - iface2
  - face2
  - state
  - boolean
  - void
  - roll
  - back
  - model
  - vb
  - net
  - vba
---

# IFace2.Highlight

Adds highlighting to or removes highlighting from a face.

## Signature

```csharp
void Highlight( 
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

## Examples

- Roll Back Model (C#) (Roll_Back_Model_Example_CSharp.htm)
- Roll Back Model (VB.NET) (Roll_Back_Model_Example_VBNET.htm)
- Roll Back Model (VBA) (Roll_Back_Model_Example_VB.htm)

## See Also

- `IEdge.Highlight`
- `IFace2.IHighlight`