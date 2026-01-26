---
type: method
interface: ISldWorks
member: GetMassProperties2
returns: System.Object
parameters:
  -
    name: FilePathName
    type: System.String
    description: Document path and file name
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration to use
  -
    name: Accuracy
    type: System.Int32
    description: 0 = as is 1 = default 2 = maximum
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IMassProperty
  - ISldWorks.IGetMassProperties2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - mass
  - properties
  - imassproperty
  - getmassproperties2
  - isldworks
  - sld
  - works
  - properties2
  - file
  - path
  - name
  - string
  - accuracy
  - int32
  - object
  - inactive
  - document
  - vba
---

# ISldWorks.GetMassProperties2

Gets the mass properties from the specified document for the specified configuration.

## Signature

```csharp
System.Object GetMassProperties2( 
   System.String
FilePathName
,
   System.String
ConfigurationName
,
   System.Int32
Accuracy
)
```
## Parameters

- `FilePathName` (System.String): Document path and file name
- `ConfigurationName` (System.String): Name of the configuration to use
- `Accuracy` (System.Int32): 0 = as is 1 = default 2 = maximum

## Return Value

Array of doubles of size 13; last element is the accuracy at which mass properties are calculated

## Remarks

You can get the density of the current SOLIDWORKS part using
ISldWorks::GetUserPreferenceDoubleValue
and swMaterialPropertyDensity. If the density has not been explicitly set by the user, then SOLIDWORKS uses 1.0. You can also derive the density of the body from the following calculation:
Density = ( Mass / Volume )
Consistent with all other functions, this method returns metric units unless otherwise specified.
If this
IModelDoc2
object is an assembly, then any suppressed components are not included in the mass property analysis. See
IComponent2::GetSuppression
to determine the state of each of the assembly components.
This method returns an empty array if mass properties are not calculated when saving the model. This is a system-level setting and is controlled by
ISldWorks::SetUserPreferenceToggle
and swUpdateMassPropsDuringSave.
NOTE:
The calculated origin for the return values is based on the default coordinate systems of the IModelDoc2, not on the a selected coordinate system.

## Examples

- Get Mass Properties of Inactive Document (VBA) (Get_Mass_Properties_of_Inactive_Document_Example_VB.htm)

## See Also

- `IMassProperty`
- `ISldWorks.IGetMassProperties2`