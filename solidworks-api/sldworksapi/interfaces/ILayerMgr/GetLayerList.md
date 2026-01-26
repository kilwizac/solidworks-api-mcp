---
type: method
interface: ILayerMgr
member: GetLayerList
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.IGetLayerList
keywords:
  - getlayerlist
  - ilayermgr
  - layer
  - mgr
  - list
  - object
  - layers
  - vb
  - net
  - vba
---

# ILayerMgr.GetLayerList

Gets a list of layers in this drawing document.

## Signature

```csharp
System.Object GetLayerList()
```
## Parameters

None.

## Return Value

Array of strings containing the name of each ILayer object in this ILayerMgr object

## Remarks

This is a 0-based array (first element is at position 0).

## Examples

- Get Layers (C#) (Get_Layers_Example_CSharp.htm)
- Get Layers (VB.NET) (Get_Layers_Example_VBNET.htm)
- Get Layers (VBA) (Get_Layers_Example_VB.htm)

## See Also

- `ILayerMgr.IGetLayerList`