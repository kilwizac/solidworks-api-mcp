---
type: method
interface: ISWPropertySheet
member: AddActivePage
returns: System.Int32
parameters:
  -
    name: Title
    type: System.String
    description: Title of CPropertyPage
  -
    name: ProgId
    type: System.String
    description: Name, ProgID, or CLSID of the ActiveX control (see Remarks )
  -
    name: LicenseKey
    type: System.String
    description: License key for the ActiveX control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addactivepage
  - iswpropertysheet
  - isw
  - sheet
  - add
  - active
  - page
  - title
  - string
  - prog
  - id
  - license
  - key
  - int32
---

# ISWPropertySheet.AddActivePage

Adds a third-party CPropertyPage to ISWPropertySheet and adds an ActiveX control on top of the page.

## Signature

```csharp
System.Int32 AddActivePage( 
   System.String
Title
,
   System.String
ProgId
,
   System.String
LicenseKey
)
```
## Parameters

- `Title` (System.String): Title of CPropertyPage
- `ProgId` (System.String): Name, ProgID, or CLSID of the ActiveX control (see Remarks )
- `LicenseKey` (System.String): License key for the ActiveX control

## Return Value

Index of CPropertyPage on ISWPropertySheet

## Remarks

Typically, this method is called from the ISldWorks
PropertySheetCreateNotify
event handler. See the Example section.
The ProgID argument accepts any of these values:
OLE short name
or ProgID for the class; for example,
"MSCAL.Calendar".
The name must match the name registered by the control.
String form of a CLSID, contained within braces, for example,
"{9DBAFCCF-592F-101B-85CE-00608CEC297B}".
See also
Keystrokes and Accelerator Keys in ActiveX Modeless Dialogs and PropertyManager Pages
.