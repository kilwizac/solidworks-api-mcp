---
type: property
interface: IPropertyManagerPageTab
member: Caption
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - caption
  - ipropertymanagerpagetab
  - manager
  - page
  - tab
  - string
readonly: null
---

# IPropertyManagerPageTab.Caption

Gets or sets the caption for this tab.

## Signature

```csharp
System.String Caption {get; set;}
```
## Parameters

None.

## Return Value

Text for tab caption

## Remarks

You can reset a tab caption regardless if the PropertyManager page is displayed or hidden.
Use
IPropertyManagerPage2::AddTab
to add any number of tabs to your PropertyManager page.