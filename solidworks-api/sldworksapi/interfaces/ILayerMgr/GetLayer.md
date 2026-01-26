---
type: method
interface: ILayerMgr
member: GetLayer
returns: System.Object
parameters:
  -
    name: NameIn
    type: System.String
    description: Layer name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.IGetLayer
keywords:
  - getlayer
  - ilayermgr
  - layer
  - mgr
  - name
  - string
  - object
  - determine
  - visible
  - vba
  - layers
  - vb
  - net
---

# ILayerMgr.GetLayer

Gets the specified layer in this drawing document.

## Signature

```csharp
System.Object GetLayer( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Layer name

## Return Value

Layer

## Remarks

You can get the layer name by calling
ILayerMgr::GetCurrentLayer
, create a new layer calling
ILayerMgr::AddLayer
, or obtain a list of layer names by calling
ILayerMgr::GetLayerList
.

## Examples

- Determine If Layer Is Visible (VBA) (Determine_if_Layer_is_Visible_Example_VB.htm)
- Get Layers (C#) (Get_Layers_Example_CSharp.htm)
- Get Layers (VB.NET) (Get_Layers_Example_VBNET.htm)
- Get Layers (VBA) (Get_Layers_Example_VB.htm)

## See Also

- `ILayerMgr.IGetLayer`