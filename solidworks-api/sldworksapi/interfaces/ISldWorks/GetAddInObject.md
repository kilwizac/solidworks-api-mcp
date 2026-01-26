---
type: method
interface: ISldWorks
member: GetAddInObject
returns: System.Object
parameters:
  -
    name: Clsid
    type: System.String
    description: GUID or ProgID of the add-in as registered with SOLIDWORKS (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.LoadAddIn
  - ISldWorks.UnloadAddIn
keywords:
  - add
  - ins
  - objects
  - getaddinobject
  - isldworks
  - sld
  - works
  - object
  - clsid
  - string
---

# ISldWorks.GetAddInObject

Gets an add-in object for the specified SOLIDWORKS add-in.

## Signature

```csharp
System.Object GetAddInObject( 
   System.String
Clsid
)
```
## Parameters

- `Clsid` (System.String): GUID or ProgID of the add-in as registered with SOLIDWORKS (see Remarks )

## Return Value

Your add-in object

## Remarks

To specify Clsid with:
a ProgID, read
Accessing SOLIDWORKS Add-in Objects
.
a GUID, use curly brackets as in "{
GUID
}", or the string is interpreted as a ProgID.

## See Also

- `ISldWorks.LoadAddIn`
- `ISldWorks.UnloadAddIn`