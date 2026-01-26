---
type: method
interface: IRevisionCloud
member: Finalize
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - finalize
  - irevisioncloud
  - revision
  - cloud
  - boolean
---

# IRevisionCloud.Finalize

Finalizes the creation of this revision cloud annotation.

## Signature

```csharp
System.Boolean Finalize()
```
## Parameters

None.

## Return Value

True if this revision cloud was successfully finalized, false if not

## Remarks

You must call this method after all revision cloud path points have been added to the annotation. After finalizing the revision cloud annotation, no new points can be added to the cloud path. The positions of existing cloud path points can be modified at any time.

## Examples

- IRevisionCloud (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRevisionCloud)