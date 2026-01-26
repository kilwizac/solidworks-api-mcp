---
type: method
interface: IModelDoc2
member: IsTessellationValid
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ITessellation
keywords:
  - tessellation
  - see
  - also
  - itessellation
  - facets
  - istessellationvalid
  - imodeldoc2
  - model
  - doc2
  - valid
  - boolean
---

# IModelDoc2.IsTessellationValid

Gets whether the current set of facets is valid.

## Signature

```csharp
System.Boolean IsTessellationValid()
```
## Parameters

None.

## Return Value

True if the facet data is valid; false if not

## Remarks

This method captures operations that invalidate the current set of facets, but does not send a RegenNotify event. For example, if the user changes the rendering tolerance, the RegenNotify event is not sent. However, the current set of facets would be invalid. This action triggers a RepaintNotify from which you can call this method before attempting to use your current set of facet data.
If false is returned, then valid facet information would not be available until SOLIDWORKS completes a repaint operation (RepaintPostNotify). In other words, SOLIDWORKS does not have any valid facet information at this time, and any facet data obtained in earlier calls is invalid.

## See Also

- `ITessellation`