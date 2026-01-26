---
type: method
interface: IPropertyManagerPage2
member: EnableButton
returns: System.Boolean
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: Button as defined in swPropertyManagerPageButtons e
  -
    name: Enable
    type: System.Boolean
    description: True enables the button, false disables it
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IPropertyManagerPageButton
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - buttons
  - enablebutton
  - manager
  - page2
  - enable
  - button
  - which
  - one
  - int32
  - boolean
---

# IPropertyManagerPage2.EnableButton

Sets whether to enable the buttons on the PropertyManager.

## Signature

```csharp
System.Boolean EnableButton( 
   System.Int32
WhichOne
,
   System.Boolean
Enable
)
```
## Parameters

- `WhichOne` (System.Int32): Button as defined in swPropertyManagerPageButtons e
- `Enable` (System.Boolean): True enables the button, false disables it

## Return Value

True if the button was enabled or disabled, false if not

## Remarks

You can only call this method after the page is displayed.
By default, all of the specified buttons that appear at the top of the PropertyManager are initially enabled, except for the Previous Page button.
NOTE:
The intended use of this method is to disable the Previous Page button when the first of multiple pages is displayed and to disable the Next Page button when the last of multiple pages is displayed. However, you can use it whenever you want.

## See Also

- `IPropertyManagerPageButton`