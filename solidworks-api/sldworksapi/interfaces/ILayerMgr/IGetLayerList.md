---
type: method
interface: ILayerMgr
member: IGetLayerList
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ILayerMgr.GetLayerList
keywords:
  - igetlayerlist
  - ilayermgr
  - layer
  - mgr
  - list
  - string
---

# ILayerMgr.IGetLayerList

Gets a list of layers in this drawing document.

## Signature

```csharp
System.String IGetLayerList()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of strings containing the name of each ILayer object in this ILayerMgr object VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This is a 0-based array (first element is at position 0).
Call
ILayerMgr::GetCount
to determine the size of the array.

## See Also

- `ILayerMgr.GetLayerList`