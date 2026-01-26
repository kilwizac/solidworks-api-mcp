---
type: method
interface: IModelDocExtension
member: ResetStandardViews
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ShowNamedView2
  - IModelDocExtension.UpdateStandardViews
keywords:
  - named
  - views
  - view
  - see
  - also
  - iview
  - resetstandardviews
  - imodeldocextension
  - model
  - doc
  - extension
  - reset
  - standard
  - boolean
---

# IModelDocExtension.ResetStandardViews

Returns all standard model views to their default settings.

## Signature

```csharp
System.Boolean ResetStandardViews()
```
## Parameters

None.

## Return Value

True to return all standard model views to their default settings, false to not

## Remarks

This method works with parts and assemblies only.

## See Also

- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.UpdateStandardViews`