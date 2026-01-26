---
type: property
interface: IPropertyManagerPageGroup
member: Checked
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - checked
  - ipropertymanagerpagegroup
  - manager
  - page
  - group
  - boolean
readonly: null
---

# IPropertyManagerPageGroup.Checked

Gets or sets the setting of a check box in the title of a group box on a PropertyManager page.

## Signature

```csharp
System.Boolean Checked {get; set;}
```
## Parameters

None.

## Return Value

True if the check box is selected, false if not

## Remarks

A group box on PropertyManager page can be created with a check box in its title. Selecting the check box causes the group box to expand so that all of the controls on that group box can be seen by the end-user. Clearing the check box causes the group box to close, or compress, so that all of the controls on that group box are hidden.
When a group box is expanded, the states of the controls within the group are not changed.
For example, if all of the controls are disabled, they remain disabled when the group box is expanded. The owner of the PropertyManager page is responsible for setting the control states.
When the end-user selects or clears the check box of a group box, the
IPropertyManagerPage2Handler5::OnGroupCheck
method is called, so that your program can react to this event and do things such as enabling the appropriate controls.
However, if your program is using this property to set the check box, then this method is not called and your program should set the controls after setting this property.
This property does not control whether or not there is a check box on your group box.
That is determined when the group box is added. See
IPropertyManagerPage2::AddGroupBox
or
IPropertyManagerPage2::IAddGroupBox
, specifically the Options argument.