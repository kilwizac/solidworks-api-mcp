---
type: method
interface: ISWPropertySheet
member: AddPagex64
returns: System.Int32
parameters:
  -
    name: Page
    type: System.Int64
    description: Pointer to the CPropertyPage to add, cast to a long long
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ISWPropertySheet.AddPage
keywords:
  - addpagex64
  - iswpropertysheet
  - isw
  - sheet
  - add
  - pagex64
  - page
  - int64
  - int32
---

# ISWPropertySheet.AddPagex64

Adds a CPropertyPage-derived page to an ISWPropertySheet in 64-bit applications.

## Signature

```csharp
System.Int32 AddPagex64( 
   System.Int64
Page
)
```
## Parameters

- `Page` (System.Int64): Pointer to the CPropertyPage to add, cast to a long long

## Return Value

True if successful, false if not

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## See Also

- `ISWPropertySheet.AddPage`