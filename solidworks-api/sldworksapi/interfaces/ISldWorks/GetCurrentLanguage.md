---
type: method
interface: ISldWorks
member: GetCurrentLanguage
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - menus
  - items
  - localized
  - languages
  - getcurrentlanguage
  - isldworks
  - sld
  - works
  - current
  - language
  - string
  - menu
  - names
  - vba
---

# ISldWorks.GetCurrentLanguage

Gets the current language used by SOLIDWORKS Design.

## Signature

```csharp
System.String GetCurrentLanguage()
```
## Parameters

None.

## Return Value

Current language

## Remarks

Possible return values are:
chinese
chinese-simplified
czech
english
french
german
italian
japanese
korean
polish
portuguese-brazilian
russian
spanish
turkish
You can see the current language in use by the SOLIDWORKS Design application in the SOLIDWORKS Design resources (dialogs, menus, and so on).
You can use the return value to set your local resource usage.

## Examples

- Get Language and Localized Menu Names (VBA) (Get_Language_and_Localized_Menu_Names_Example_VB.htm)