---
type: method
interface: ISldWorks
member: IDefineAttribute
returns: AttributeDef
parameters:
  -
    name: Name
    type: System.String
    description: Name to give to the attribute definition; the name must be unique and qualified among the attributes defined in the current session (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.DefineAttribute
keywords:
  - attribute
  - see
  - also
  - iattribute
  - create
  - idefineattribute
  - isldworks
  - sld
  - works
  - define
  - name
  - string
  - def
---

# ISldWorks.IDefineAttribute

Creates an attribute definition, which is the first step in generating attributes.

## Signature

```csharp
AttributeDef IDefineAttribute( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name to give to the attribute definition; the name must be unique and qualified among the attributes defined in the current session (see Remarks )

## Return Value

Attribute definition

## Remarks

An attribute definition is a container that can hold a group of parameters. For example, you can use this container to hold machining information or BOM data. Instances of this container may then be created as
IAttribute
objects on the document object, or on faces, edges, vertices, and features within the document. Once created, you can get any of the IAttribute objects and query or change its parameter values.
The Name argument used for this attribute definition must be unique and qualified among the attributes defined in the current session. To ensure this, the first three letters of the name must be an officially recognized third-party identifier. Contact SOLIDWORKS Corporation if you need one. You can also use the prefix: "pub" ( for "public" ) if you are just testing.
General sequence of steps in attribute creation
Create an attribute definition (ISldWorks::DefineAttribute or
ISldWorks::IDefineAttribute
)
Add parameters to the attribute definition (
IAttributeDef::AddParameter
)
Register the attribute definition (
IAttributeDef::Register
)
Create instances of the attribute definition on objects throughout the model (
IAttributeDef::CreateInstance5
)
Perform steps 1 through 3 only once for each working session. In other words, perform steps 1 through 3 when your DLL or EXE is initially loaded or run. Until the DLL is unloaded, or the EXE is closed, you can create as many instances of the attribute definition as you want as shown in step 4.
Calling this method attaches to an existing attribute definition with the specified Name or creates
new attribute definition if a match is not found. The attribute definition exists throughout the current SOLIDWORKS Design session and persistent across SOLIDWORKS Design sessions if an attribute instance with that definition exists in the document. If an attribute definition exists, you cannot add or remove its parameters.
After an attribute instance is added to a face, edge, vertex, loop, feature, or document, there are several ways to get back to the attribute for query or modification.
Because an attribute instance is a feature, you can use any of the standard feature traversal routines (the FeatureByName methods,
IModelDoc2::FirstFeature
or
IModelDoc2::IFirstFeature
, and
IFeature::GetNextFeature
or
IModelDoc2::IGetNextFeature
) to grab the feature representation of the attribute. After you have the
IFeature
object that represents the attribute instance, you can call
IFeature::GetSpecificFeature2
to get the underlying
IAttribute
object.
If the end-user selected the attribute in the FeatureManager design tree, you can use standard selection control to get the IFeature object representing the attribute instance (
ISelectionMgr::GetSelectedObject6
) and then call IFeature::GetSpecificFeature2 to get the underlying IAttribute object.
If you are traversing body topology, then you can locate any IAttribute objects with a call to
IEntity::FindAttribute
or
IEntity::IFindAttribute
from the particular
IEntity
object (that is, face, edge, and so on). If the attribute instance was placed on the document, then you would need to use option 1 to get back to it.
After you have the IAttribute object that you want to query or modify, use the
IAttribute::GetParameter
or
IAttribute::IGetParameter
method to return the desired attribute parameter object. The
IParameter
object provides a set of functions to query or modify specific attribute values.

## See Also

- `ISldWorks.DefineAttribute`