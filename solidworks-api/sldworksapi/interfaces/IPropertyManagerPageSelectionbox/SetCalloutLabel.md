---
type: method
interface: IPropertyManagerPageSelectionbox
member: SetCalloutLabel
returns: System.Boolean
parameters:
  -
    name: Label
    type: System.String
    description: Default callout label
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - setcalloutlabel
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - callout
  - label
  - string
  - boolean
---

# IPropertyManagerPageSelectionbox.SetCalloutLabel

Sets the default callout label for selections made in this selection box on the PropertyManager page.

## Signature

```csharp
System.Boolean SetCalloutLabel( 
   System.String
Label
)
```
## Parameters

- `Label` (System.String): Default callout label

## Return Value

True if the callout label was set, false if not

## Remarks

This property can be used at any time, whether or not the callout is displayed. The label must not be an empty string.
By default, the selection box is created without callouts for selections. This method overrides that behavior.
For more control, you can implement the
IPropertyManagerPage2Handler5::OnSelectionboxCalloutCreated
property, which allows you to collect information such as the selection type from the last selection. Next, use the
IPropertyManagerPageSelectionbox::Callout
property to get the
ICallout
object. Then, use that object's various properties to control the callout text and display characteristics based on that selection information.