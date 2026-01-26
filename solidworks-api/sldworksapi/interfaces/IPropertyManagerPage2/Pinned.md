---
type: property
interface: IPropertyManagerPage2
member: Pinned
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - pushpin
  - pinned
  - manager
  - page2
  - boolean
readonly: null
---

# IPropertyManagerPage2.Pinned

Gets or sets the state of the pushpin on a PropertyManager page.

## Signature

```csharp
System.Boolean Pinned {get; set;}
```
## Parameters

None.

## Return Value

True if pushpin is pressed, false if not

## Remarks

If the user clicks...
And PropertyManagerPage2::GetPinned is...
Then...
x
True or false
IPropertyManagerPage2Handler8::OnClose
(swPropertyManagerPageClose_Closed) is called, the dialog closes, and
IPropertyManagerPage2Handler8::AfterClose
is called.
check mark
True
IPropertyManagerPage2Handler8::OnClose
(swPropertyManagerPageClose_Apply) is called, the dialog is not closed,
IPropertyManagerPage2Handler8::AfterClose
is not called.
false
IPropertyManagerPage2Handler8::OnClose
(swPropertyManagerPageClose_Okay) is called, the dialog is closed, and
IPropertyManagerPage2Handler8::AfterClose
is called.