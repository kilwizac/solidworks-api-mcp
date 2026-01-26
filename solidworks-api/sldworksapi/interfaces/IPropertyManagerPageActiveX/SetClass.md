---
type: method
interface: IPropertyManagerPageActiveX
member: SetClass
returns: System.Boolean
parameters:
  -
    name: ClassID
    type: System.String
    description: Class ID for the control
  -
    name: LicenseKey
    type: System.String
    description: License key for the control
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setclass
  - ipropertymanagerpageactivex
  - manager
  - page
  - active
  - id
  - string
  - license
  - key
  - boolean
---

# IPropertyManagerPageActiveX.SetClass

Sets the interface to this ActiveX control.

## Signature

```csharp
System.Boolean SetClass( 
   System.String
ClassID
,
   System.String
LicenseKey
)
```
## Parameters

- `ClassID` (System.String): Class ID for the control
- `LicenseKey` (System.String): License key for the control

## Return Value

Always returns true

## Remarks

This method sets the class ID and license key information for the ActiveX control when a PropertyManager page created using the API is shown and the ActiveX control is created. ClassId can be either the name of the control (ProgID) or the class ID (CLSID), for example, "MSCAL.calendar" or "{8E27C92B-1264-101C-8A2F-040224009C02}". Both provide the calendar protocol. You can obtain these strings using a combination of the Microsoft OLE/COM Object Viewer and the registry editor.
VBA example:
' ProgID
bRet = m_pActiveXControl.SetClass("MSCAL.Calendar", "")
bRet = m_pActiveXControl2.SetClass("MSComctlLib.ListViewCtrl", "")
' CLSID
bRet = m_pActiveXControl.SetClass("{8E27C92B-1264-101C-8A2F-040224009C02}", "")
bRet = m_pActiveXControl2.SetClass("{BDD1F04B-858B-11D1-B16A-00C0F0283628}", "")
This method does not check to determine if the creation of the control worked. Instead, the
IPropertyManagerPage2Handler5::OnActiveXControlCreated
sends notification when an attempt to create the ActiveX control occurs, regardless if it is created or not. Use the IPropertyManagerPage2Handler5::OnActiveXControlCreated method's return value to indicate what action to take if the creation of the control failed.

## Examples

- IPropertyManagerPageActiveX (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPageActiveX)