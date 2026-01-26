---
type: method
interface: ISWPropertySheet
member: AddPage
returns: System.Int32
parameters:
  -
    name: Page
    type: System.Int32
    description: Pointer to the CPropertyPage to add, cast to a long
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addpage
  - iswpropertysheet
  - isw
  - sheet
  - add
  - page
  - int32
---

# ISWPropertySheet.AddPage

Adds a CPropertyPage-derived page to an ISWPropertySheet.

## Signature

```csharp
System.Int32 AddPage( 
   System.Int32
Page
)
```
## Parameters

- `Page` (System.Int32): Pointer to the CPropertyPage to add, cast to a long

## Return Value

True if successful, false if not

## Remarks

If your application must be x64 compatible, then use
ISWPropertySheet::AddPagex64
.