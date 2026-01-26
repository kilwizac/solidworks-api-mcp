---
type: property
interface: IPropertyManagerPage2
member: Close
returns: void
parameters:
  -
    name: Okay
    type: System.Boolean
    description: VARIANT_True or VARIANT_false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPage2.AddControl
  - IPropertyManagerPage2.AddGroupBox
  - IPropertyManagerPage2.SetTitleBitmap2
  - IPropertyManagerPage2.Show2
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - close
  - manager
  - page2
  - okay
  - boolean
  - void
readonly: null
---

# IPropertyManagerPage2.Close

Closes the current page in the PropertyManager.

## Signature

```csharp
void Close( 
   System.Boolean
Okay
)
```
## Parameters

- `Okay` (System.Boolean): VARIANT_True or VARIANT_false

## Return Value

When you call... Then... Close(VARIANT_True) IPropertyManagerPage2Handler8::OnClose is called with argument swPropertyManagerPageClose_Okay, regardless of which buttons are displayed at the top of the page. Close(VARIANT_false) IPropertyManagerPage2Handler8::OnClose is called with argument swPropertyManagerPageClose_Cancel, regardless of which buttons are displayed at the top of the page.

## See Also

- `IPropertyManagerPage2.AddControl`
- `IPropertyManagerPage2.AddGroupBox`
- `IPropertyManagerPage2.SetTitleBitmap2`
- `IPropertyManagerPage2.Show2`