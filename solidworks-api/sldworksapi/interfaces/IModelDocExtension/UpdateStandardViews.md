---
type: method
interface: IModelDocExtension
member: UpdateStandardViews
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the standard model view to change; empty string to use ViewId ( see Remarks )
  -
    name: ViewId
    type: System.Int32
    description: View ID as defined in swStandardViews_e ; -1 to use ViewName ( see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.ShowNamedView2
  - IModelDocExtension.ResetStandardViews
keywords:
  - named
  - views
  - view
  - see
  - also
  - iview
  - updatestandardviews
  - imodeldocextension
  - model
  - doc
  - extension
  - update
  - standard
  - name
  - string
  - id
  - int32
  - boolean
---

# IModelDocExtension.UpdateStandardViews

Changes the specified standard view to the current model view.

## Signature

```csharp
System.Boolean UpdateStandardViews( 
   System.String
ViewName
,
   System.Int32
ViewId
)
```
## Parameters

- `ViewName` (System.String): Name of the standard model view to change; empty string to use ViewId ( see Remarks )
- `ViewId` (System.Int32): View ID as defined in swStandardViews_e ; -1 to use ViewName ( see Remarks )

## Return Value

True if the standard model view update is successful, false if not

## Remarks

This method works with parts and assemblies only.
If you set both ViewName and ViewId, then ViewId takes precedence if the two arguments do not resolve to the same standard model view.
This method does not support the following standard model views:
swStandardViews_e
.swDimetricView
swStandardViews_e.swIsometricView
swStandardViews_e.swTrimetricView

## See Also

- `IModelDoc2.ShowNamedView2`
- `IModelDocExtension.ResetStandardViews`