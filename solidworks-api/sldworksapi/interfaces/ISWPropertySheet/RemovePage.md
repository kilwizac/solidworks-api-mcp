---
type: method
interface: ISWPropertySheet
member: RemovePage
returns: System.Int32
parameters:
  -
    name: Page
    type: System.Int32
    description: CPropertyPage to add, cast to a long
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - removepage
  - iswpropertysheet
  - isw
  - sheet
  - remove
  - page
  - int32
---

# ISWPropertySheet.RemovePage

Removes a CPropertyPage derived page from an ISWPropertySheet.

## Signature

```csharp
System.Int32 RemovePage( 
   System.Int32
Page
)
```
## Parameters

- `Page` (System.Int32): CPropertyPage to add, cast to a long

## Return Value

True if successful, false if not