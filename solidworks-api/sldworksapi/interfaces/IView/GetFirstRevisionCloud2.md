---
type: method
interface: IView
member: GetFirstRevisionCloud2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetRevisionCloudCount
  - IView.GetRevisionClouds
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - revision
  - clouds
  - irevisioncloud
  - view
  - getfirstrevisioncloud2
  - first
  - cloud2
  - object
---

# IView.GetFirstRevisionCloud2

Gets the first revision cloud annotation in this view.

## Signature

```csharp
System.Object GetFirstRevisionCloud2()
```
## Parameters

None.

## Return Value

IRevisionCloud

## Remarks

This method obsoletes IView::GetFirstRevisionCloud by supporting inactive sheets.

## See Also

- `IView.GetRevisionCloudCount`
- `IView.GetRevisionClouds`